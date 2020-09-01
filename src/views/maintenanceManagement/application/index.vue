<template>
  <base-card style="min-height:100%;">
    <dialog-form
      :visible.sync="dialogTableVisible"
      title="新增维修申请"
      @refresh="getList"
    ></dialog-form>
    <el-tab-pane label="维修申请" disabled>
      <d2-crud
        ref="applications"
        :index-row="indexRow"
        :columns="columns"
        :data="tableData"
        :options="options"
        :rowHandle="rowHandle"
        selection-row
        @row-remove="delRow"
        @selection-change="handleSelectionChange"
        @edit-handle="editRow"
        @commit-handle="commitRow"
      >
        <el-button
          round
          slot="header"
          type="primary"
          style="margin-bottom: 5px"
          icon="el-icon-plus"
          @click="addRow"
          >新增申请</el-button
        >
      </d2-crud>
    </el-tab-pane>
  </base-card>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import DialogForm from './form'
import tableConfig from './table'
import api from '@/api/maintenance/application'
export default {
  name: 'Application',
  components: {
    BaseCard,
    DialogForm
  },
  data() {
    return {
      ...tableConfig,
      tableData: [],
      selected: [],
      dialogTableVisible: false
    }
  },
  computed: {
    hasSelected() {
      return this.selected.length === 0
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const res = await api.getList()
      if (res.flag) {
        this.tableData = res.data
        return
      }
      this.tableData = []
    },
    handleSelectionChange(selected) {
      this.selected = selected
      console.log(selected)
    },
    async delRow({ index, row }, done) {
      console.log(row)
      const res = await api.del(row.id)
      if (res.data) {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        done()
        return
      }
      this.$message({
        message: '删除失败',
        type: 'error'
      })
    },
    addRow() {
      this.dialogTableVisible = true
    },
    editRow() {
      this.dialogTableVisible = true
    },
    commitRow(e) {
      this.$confirm('是否提交本条申请?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '提交成功!'
          })
        })
        .catch(() => {})
    }
  }
}
</script>

<style></style>
