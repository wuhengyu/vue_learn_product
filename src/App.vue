<template>
  <div class="flex">
    <el-form :model="searchForm" inline>
      <el-form-item label="商品名称">
        <el-input
          v-model="searchForm.name"
          placeholder="输入商品名称进行查询"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearch">查询</el-button>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="handleAdd">新增商品</el-button>
  </div>

  <el-table :data="tableData" border style="width: 100%" empty-text="暂无数据">
    <el-table-column type="index" label="序号" width="60"></el-table-column>
    <el-table-column prop="name" label="商品名称"></el-table-column>
    <el-table-column prop="price" label="单价"></el-table-column>
    <el-table-column prop="count" label="库存"></el-table-column>
    <el-table-column
      prop="onsale"
      label="是否上架"
      :formatter="formatterOnSale"
    ></el-table-column>
    <el-table-column prop="remark" label="备注"></el-table-column>
    <el-table-column
      prop="createTime"
      label="添加时间"
      :formatter="formatTime"
    ></el-table-column>
    <el-table-column label="操作">
      <template #default="{ row }">
        <el-button type="text" size="small" @click="handleEdit(row)"
          >编辑</el-button
        >
        <el-button type="text" size="small" @click="handleDelete(row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>

  <el-dialog
    v-model="createVisible"
    :title="title"
    width="500"
    :before-close="handleClose"
  >
    <el-form ref="formRef" :model="createForm" label-width="80px">
      <el-form-item label="商品名称" prop="name">
        <el-input
          v-model="createForm.name"
          placeholder="输入商品名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="单价" prop="price">
        <el-input v-model="createForm.price" placeholder="输入单价"></el-input>
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
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确定</el-button>
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
      return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
    };

    const formatterOnSale = (row, col) => {
      return row[col.property] ? "是" : "否";
    };

    // 添加新增商品
    const formRef = ref(null);
    const title = ref(null);
    const createVisible = ref(false);
    const createForm = reactive({
      id: "",
      name: "",
      price: "",
      count: "",
      onsale: false,
      remark: "",
    });
    const defaultForm = { ...createForm };

    const onCreate = (info) => {
      setTimeout(() => {
        // Simulating API request
        const res = {
          code: 200,
          msg: "",
        };
        if (res.code !== 200) {
          proxy.$message.error(res.msg);
        } else {
          const newInfo = {
            ...info,
            createTime: new Date(),
            id: `id_${Date.now()}`,
          };
          data.unshift(newInfo);
          proxy.$message.success("新增成功");
          handleClose();
          getTableData();
        }
      }, 300);
    };

    const handleClose = () => {
      createVisible.value = false;
      for (const key in createForm) {
        createForm[key] = defaultForm[key];
      }
    };

    const handleConfirm = () => {
      if (createForm.id) {
        onUpdate(createForm);
      } else {
        onCreate(createForm);
      }
    };

    const handleAdd = () => {
      title.value = "新增商品";
      createVisible.value = true;
    };

    // 编辑更新
    const onUpdate = (newInfo) => {
      setTimeout(() => {
        // 组合式API请求
        const res = {
          code: 200,
          msg: "",
        };
        if (res.code !== 200) {
          proxy.$message.error(res.msg);
        } else {
          const index = data.findIndex((v) => v.id === newInfo.id);
          data[index] = {
            ...data[index],
            ...newInfo,
          };
          proxy.$message.success("修改成功");
          handleClose();
          getTableData();
        }
      }, 300);
    };

    const handleEdit = (row) => {
      title.value = "修改商品";
      createVisible.value = true;
      for (const key in createForm) {
        createForm[key] = row[key];
      }
    };

    const handleDelete = (row) => {
      const index = data.findIndex((v) => v.id === row.id);
      data.splice(index, 1);
      proxy.$message.success("删除成功");
      getTableData();
    };

    // Mock backend data
    const data = [];
    const tableData = ref([]);
    const getTableData = () => {
      setTimeout(() => {
        // 组合式API请求
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
      formRef,
      title,
      createForm,
      createVisible,
      handleAdd,
      handleClose,
      handleDelete,
      handleEdit,
      handleConfirm,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
}
</style>