<template>
  <base-card :isTabs="true" style="min-height:100%;">
    <plan-form :visible.sync="dialogTableVisible" title="新增计划"></plan-form>
    <el-tab-pane label="计划制定">
      <d2-crud
        ref="applications"
        :index-row="applyTableConfig.indexRow"
        :columns="applyTableConfig.columns"
        :data="applyTableData"
        :options="applyTableConfig.options"
        :rowHandle="applyTableConfig.rowHandle"
        @add-handle="addRow"
      >
      </d2-crud>
    </el-tab-pane>
    <el-tab-pane label="修改计划">
      <d2-crud
        ref="applications"
        :index-row="planTableConfig.indexRow"
        :columns="planTableConfig.columns"
        :data="planTableData"
        :options="planTableConfig.options"
        :rowHandle="planTableConfig.rowHandle"
        selection-row
        @row-remove="handleRowRemove"
        @selection-change="handleSelectionChange"
        @edit-handle="editRow"
        @commit-handle="commitRow"
      >
        <template slot="header">
          <el-button
            round
            type="danger"
            style="margin-bottom: 5px"
            icon="el-icon-delete"
            @click="handleRowRemove"
            :disabled="hasSelected"
            >批量删除</el-button
          >
          <el-button
            round
            type="success"
            style="margin-bottom: 5px"
            icon="el-icon-success"
            :disabled="hasSelected"
            @click="commitRow"
            >批量提交</el-button
          >
        </template>
      </d2-crud>
    </el-tab-pane>
  </base-card>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import PlanForm from './planform'
import applyTableConfig from './applicationTable'
import planTableConfig from './planTable'
import api from '@/api/maintenance/application'
export default {
  name: 'Plan',
  components: {
    BaseCard,
    PlanForm
  },
  data() {
    return {
      applyTableConfig,
      planTableConfig,
      applyTableData: [],
      planTableData: [
        {
          id: 1,
          name: 'go dead',
          operator: 'wbd',
          application_id: 'csc',
          plan_complete_time: 'czc',
          is_submitted: 'vxvxc',
          check_status: 'xvvxv',
          process_status: 'xdfgdb',
          repair_time: 'xbxcvb',
          create_time: 'xcvcxv ',
          update_time: 'xcvcx',
          plan_resources: 'xvdxc'
        }
      ],
      dialogTableVisible: false,
      selected: []
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
        this.applyTableData = res.data
        return
      }
      this.applyTableData = []
    },
    addRow(e) {
      this.dialogTableVisible = true
      console.log(e)
    },
    handleSelectionChange(selected) {
      this.selected = selected
      console.log(selected)
    },
    handleRowRemove({ index, row }, done) {
      setTimeout(() => {
        console.log(index)
        console.log(row)
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        done()
      }, 300)
    },
    editRow(e) {
      console.log(e)
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
