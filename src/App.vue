<template>
  <div class="flex">
    <el-form :model="searchchForm" inline>
      <el-form-item label="商品名称">
        <el-input v-model="searchForm.name" placeholder="输入商品名称进行查询">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleSearch"></el-button>
      </el-form-item>
    </el-form>
    <el-button>新增商品</el-button>
  </div>

  <el-table :data="tableData" border style="width: 100%" empty-text="暂无数据">
    <el-table-column type="index" label="序号" width="60">
      <el-table-column prop="name" label="商品名称">
        <el-table-column prop="price" label="单价">
          <el-table-column prop="count" label="库存">
            <el-table-column
              prop="onsale"
              label="是否上架"
              :formatter="formatOnSale"
            >
              <el-table-column prop="remark" label="备注">
                <el-table-column
                  label="添加时间"
                  :formatter="formatTime"
                  prop="createTime"
                >
                  <el-table-column label="操作">
                    <template #default="{ row }">
                      <el-button>
                        <el-button
                          type="text"
                          size="small"
                          @click="handleEdit(row)"
                          >编辑</el-button
                        >
                        <el-button
                          type="text"
                          size="small"
                          @click="handleDelete(row)"
                          >删除</el-button
                        >
                      </el-button>
                    </template>
                  </el-table-column>
                </el-table-column>
              </el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table-column>
  </el-table>

  <el-dialog
    v-model="createVisible"
    :title="title"
    width="500px"
    :before-close="handleClose"
  >
    <el-form ref="formRef" :model="createForm" label-width="80px">
      <!-- {{ createForm }} -->
      <!-- <el-form-item prop="id" v-show="false">
      <input v-model="createForm.id" />
      </el-form-item> -->
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="createForm.name" placeholder="输入数量"></el-input>
      </el-form-item>
      <el-form-item label="单价" prop="price">
        <el-input v-model="createForm.price" placeholder="输入数量"></el-input>
      </el-form-item>
      <el-form-item label="数量" prop="count">
        <el-input v-model="createForm.count" placeholder="输入数量"></el-input>
      </el-form-item>
      <el-form-item label="是否上架" prop="onsale">
        <el-switch v-model="createForm.onsale"></el-switch>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input
          type="textarea"
          v-model="createForm.remark"
          placeholder="输入备注"
        ></el-input>
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button>
          <el-button @click="createClose = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirm">确 定</el-button>
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { reactive, ref, getCurrentInstance } from "vue";
export default {
  name: "App",
  setup() {
    const { proxy } = getCurrentInstance();
    const formatTime = (row, col) => {
      const date = new Date(row[col.property]);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hour = date.getHours();
      const min = date.getMinutes();
      const sec = date.getSeconds();
      return "${year}-${month}-${day} ${hour}:${min}:${sec}";
    };
    const formatterOnSale = (row, col) => {
      return row[col.property] ? "是" : "否";
    };

    // 后台数据模拟
    const data = [];
    const tableData = ref([]);
    const getTableData = () => {
      setTimeout(() => {
        // 失败
        // const res = {code :-1, msg: '系统异常'}
        // 成功
        const res = {
          code: 200,
          msg: "",
          data: searchForm.name
            ? data.filter((v) => new RegExp(searchForm.name).test(v.name + ""))
            : data.slice(),
        };
        if (res.code !== 200) {
          tableData.value = [];
          proxy.$message.error(res.msg);
          return;
        }
        tableData.value = res.data;
      }, 300);
    };
    const searchForm = reactive({
      name: "",
    });
    const handleSearch = () => {
      getTableData();
    };
    getTableData();
    return {
      handleSearch,
      formatTime,
      formatterOnSale,
      tableData,
      searchForm,
      formRef: ref(null),
      title: ref(null),
      createForm: ref(null),
      createVisible: ref(null),
      handleAdd: ref(null),
      handleClose: ref(null),
      handleDelete: ref(null),
      handleEdit: ref(null),
      handleConfirm: ref(null),
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
html,
body,
ul,
h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.register-link .el-form-item__content {
  display: flex;
  justify-content: right;
}
</style>