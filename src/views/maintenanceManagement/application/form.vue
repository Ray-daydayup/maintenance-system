<template>
  <el-dialog v-bind="$attrs" v-on="$listeners" @open="onOpen" @close="onClose">
    <el-form
      ref="elForm"
      :model="formData"
      :rules="rules"
      size="medium"
      label-width="110px"
    >
      <el-form-item label="下拉选择" prop="licenseNumber">
        <el-select
          v-model="formData.licenseNumber"
          placeholder="请输入关键字"
          filterable
          clearable
          :style="{ width: '50%' }"
        >
          <el-option
            v-for="(item, index) in licenseNumberOptions"
            :key="index"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="车型" prop="vehicleType">
        <el-input
          v-model="formData.vehicleType"
          :disabled="true"
          :style="{ width: '50%' }"
        ></el-input>
      </el-form-item>
      <el-form-item label="任务名称" prop="name">
        <el-input
          v-model="formData.name"
          placeholder="请输入任务名称"
          clearable
          :style="{ width: '50%' }"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="期望完工时间" prop="expectCompleteTime">
        <el-date-picker
          type="datetime"
          v-model="formData.expectCompleteTime"
          format="yyyy-MM-dd HH:mm:ss"
          value-format="yyyy-MM-dd HH:mm:ss"
          :style="{ width: '50%' }"
          placeholder="请选择期望完工时间"
          clearable
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="故障描述" prop="troubles">
        <el-input
          v-model="formData.troubles"
          type="textarea"
          placeholder="请输入故障描述"
          :autosize="{ minRows: 5, maxRows: 5 }"
          :style="{ width: '80%' }"
        ></el-input>
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
        licenseNumber: '',
        vehicleType: undefined,
        name: '',
        expectCompleteTime: null,
        troubles: undefined
      },
      rules: {
        licenseNumber: [
          {
            required: true,
            message: '请输入关键字',
            trigger: 'change'
          }
        ],
        vehicleType: [
          {
            required: true,
            message: '请输入车型',
            trigger: 'blur'
          }
        ],
        name: [
          {
            required: true,
            message: '请输入任务名称',
            trigger: 'blur'
          }
        ],
        expectCompleteTime: [
          {
            required: true,
            message: '请选择期望完工时间',
            trigger: 'change'
          }
        ],
        troubles: [
          {
            required: true,
            message: '请输入故障描述',
            trigger: 'blur'
          }
        ]
      },
      licenseNumberOptions: [
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
