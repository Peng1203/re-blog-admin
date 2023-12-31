<template>
  <div class="peng-dialog">
    <el-dialog
      :width="width"
      :title="title"
      :modal="modal"
      :before-close="handleClose"
      :close-on-click-modal="modelClose"
      :close-on-press-escape="escClose"
      :draggable="draggable"
      :align-center="aCenter"
      v-model="dialogStatus"
    >
      <template #header>
        <slot name="header" />
      </template>

      <slot />

      <template
        #footer
        v-if="operationRow"
      >
        <slot name="footer">
          <div>
            <el-button
              size="small"
              @click="handleClickCancel"
            >
              取消
            </el-button>
            <el-button
              type="primary"
              size="small"
              @click="handleClickConfirm"
            >
              确认
            </el-button>
          </div>
        </slot>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { DialogAttribute } from './types';

const props = withDefaults(defineProps<DialogAttribute>(), {
  fullscreen: false,
  modal: true,
  width: '770px',
  modelClose: false,
  escClose: true,
  draggable: true,
  aCenter: false,
  operationRow: true,
});

const emits = defineEmits(['update:modelValue', 'dialogClose', 'clickCancel', 'clickConfirm']);

const dialogStatus = ref<boolean>(true);

watch(
  () => props.modelValue,
  val => (dialogStatus.value = val),
  {
    deep: true,
    immediate: true,
  }
);
const handleClose = () => {
  dialogStatus.value = false;
  emits('update:modelValue', dialogStatus.value);
  emits('dialogClose', dialogStatus.value);
};

const handleClickCancel = () => {
  emits('clickCancel');
  handleClose();
};

const handleClickConfirm = () => emits('clickConfirm');
</script>

<style lang="scss" scoped>
.peng-dialog {
  :deep(.el-dialog) {
    max-height: 70vh;
    border-radius: 8px;
  }
  :deep(.el-dialog__header) {
    padding: 10px 20px;
    margin-right: 0px !important;
    border-bottom: 1px solid rgb(180, 169, 169);
  }
  :deep(.el-dialog__body) {
    max-height: calc(70vh - 111px) !important;
  }
  :deep(.el-dialog__headerbtn) {
    top: 0px;
  }
}
</style>
