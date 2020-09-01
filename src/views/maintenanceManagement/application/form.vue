<template>
  <el-dialog v-bind="$attrs" v-on="$listeners" @close="onClose">
    <el-form
      ref="elForm"
      :model="formData"
      :rules="rules"
      size="medium"
      label-width="110px"
    >
      <el-form-item label="车辆ID" prop="vehicleId">
        <el-select
          v-model="formData.vehicleId"
          placeholder="请输入关键字"
          filterable
          clearable
          :style="{ width: '50%' }"
        >
          <el-option
            v-for="(item, index) in vehicleOptions"
            :key="index"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select>
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
import { getList as getVehicleList } from '@/api/baseInfo/vehicle'
import api from '@/api/maintenance/application'
export default {
  inheritAttrs: false,
  components: {},
  props: [],
  data() {
    return {
      applicantId: this.$store.state.user.userInfo.id,
      formData: {
        vehicleId: undefined,
        name: '',
        expectCompleteTime: null,
        troubles: undefined
      },
      rules: {
        vehicleId: [
          {
            required: true,
            message: '请输入关键字',
            trigger: 'change'
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
      vehicleOptions: []
    }
  },
  mounted() {
    this.getVehicleList({ all: true })
    console.log(this.$store.state.user)
  },
  methods: {
    async getVehicleList(data) {
      const res = await getVehicleList(data)
      if (res.flag) {
        this.vehicleOptions = res.data.list.map((item) => ({
          label: item.licenseNumber,
          value: item.id
        }))
      }
    },
    onClose() {
      this.$refs.elForm.resetFields()
    },
    close() {
      this.$emit('update:visible', false)
    },
    handelConfirm() {
      this.$refs.elForm.validate(async (valid) => {
        if (!valid) return
        const data = { applicantId: this.applicantId, ...this.formData }
        const res = await api.add(data)
        console.log(res)
        this.$emit('refresh')
        this.close()
      })
    }
  }
}
</script>
<style></style>
