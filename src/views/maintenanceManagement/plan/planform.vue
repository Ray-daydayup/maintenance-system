<template>
  <el-dialog v-bind="$attrs" v-on="$listeners" @open="onOpen" @close="onClose">
    <el-form
      ref="elForm"
      :model="formData"
      :rules="rules"
      size="medium"
      label-width="110px"
    >
      <el-form-item label="维修计划名称" prop="name">
        <el-input
          v-model="formData.name"
          placeholder="请输入维修计划名称"
          clearable
          :style="{ width: '100%' }"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="计划负责人" prop="operator">
        <el-input
          v-model="formData.operator"
          placeholder="请输入计划负责人"
          clearable
          :style="{ width: '100%' }"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="维修申请编号" prop="application_id">
        <el-input
          v-model="formData.application_id"
          placeholder="请输入维修申请编号"
          :disabled="true"
          clearable
          :style="{ width: '100%' }"
        ></el-input>
      </el-form-item>
      <el-form-item label="计划完工时间" prop="plan_complete_time">
        <el-date-picker
          type="datetime"
          v-model="formData.plan_complete_time"
          format="yyyy-MM-dd HH:mm:ss"
          value-format="yyyy-MM-dd HH:mm:ss"
          :style="{ width: '100%' }"
          placeholder="请选择计划完工时间"
          clearable
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="计划小时" prop="repair_time">
        <el-input
          v-model="formData.repair_time"
          placeholder="请输入计划小时"
          clearable
          :style="{ width: '100%' }"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="计划资源" prop="plan_resource">
        <el-select
          v-model="formData.plan_resource"
          placeholder="请选择计划资源"
          multiple
          filterable
          clearable
          :style="{ width: '100%' }"
        >
          <el-option
            v-for="(item, index) in plan_resourceOptions"
            :key="index"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="handelConfirm">确定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  inheritAttrs: false,
  components: {},
  props: [],
  data() {
    return {
      formData: {
        name: undefined,
        operator: undefined,
        application_id: undefined,
        plan_complete_time: null,
        repair_time: undefined,
        plan_resource: []
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入维修计划名称',
            trigger: 'blur'
          }
        ],
        operator: [
          {
            required: true,
            message: '请输入计划负责人',
            trigger: 'blur'
          }
        ],
        application_id: [
          {
            required: true,
            message: '请输入维修申请编号',
            trigger: 'blur'
          }
        ],
        plan_complete_time: [
          {
            required: true,
            message: '请选择计划完工时间',
            trigger: 'change'
          }
        ],
        repair_time: [
          {
            required: true,
            message: '请输入计划小时',
            trigger: 'blur'
          }
        ],
        plan_resource: [
          {
            required: true,
            type: 'array',
            message: '请至少选择一个计划资源',
            trigger: 'change'
          }
        ]
      },
      plan_resourceOptions: [
        {
          label: '选项一',
          value: 1
        },
        {
          label: '选项二',
          value: 2
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onOpen() {},
    onClose() {
      this.$refs.elForm.resetFields()
    },
    close() {
      this.$emit('update:visible', false)
    },
    handelConfirm() {
      this.$refs.elForm.validate((valid) => {
        if (!valid) return
        this.close()
      })
    }
  }
}
</script>
<style></style>
