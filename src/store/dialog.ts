import { defineStore } from 'pinia'
import { ref, shallowRef } from 'vue'

import { IDialog } from '@/types/base'
import delay from '@/utils/delay'

const defaultConfirmOptions: IDialog = {
  isConfirm: true,
  title: 'check',
  closeDelay: 200,
  text: '',
  resolve: () => {}
}

const defaultAlertOptions: IDialog = {
  isConfirm: false,
  title: 'notification',
  closeDelay: 200,
  text: '',
  resolve: () => {}
}

export const useDialog = defineStore('Dialog', () => {
  const value = ref<boolean>(false)
  const dialogInstance = shallowRef<IDialog>()

  async function confirm (text: string, options: Partial<IDialog> = {}) {
    value.value = true
    const { isConfirm, title, closeDelay } = { ...defaultConfirmOptions, ...options }

    return new Promise(resolve => {
      dialogInstance.value = {
        isConfirm,
        title,
        closeDelay,
        text,
        resolve
      }
    })
  }

  async function alert (text: string, options: Partial<IDialog> = {}) {
    value.value = true
    const { isConfirm, title, closeDelay } = { ...defaultAlertOptions, ...options }

    return new Promise(resolve => {
      dialogInstance.value = {
        isConfirm,
        title,
        closeDelay,
        text,
        resolve
      }
    })
  }

  async function closeDialog (result?: boolean) {
    value.value = false
    await delay(dialogInstance.value?.closeDelay ?? 200)
    dialogInstance.value?.resolve(result)
  }

  return {
    value,
    dialogInstance,
    confirm,
    alert,
    closeDialog
  }
})