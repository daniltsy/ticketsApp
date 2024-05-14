<template>
  <app-page title="Список заявок">
    <template #header>
      <button
        class="btn primary"
        @click="modal = true">
        Создать
      </button>
    </template>
    <request-table :requests="requests"></request-table>

    <teleport to="body">
      <app-modal
        v-if="modal"
        title="Создать заявку"
        @close="modal = false">
        <request-modal @created="modal = false"></request-modal
      ></app-modal>
    </teleport>
  </app-page>
</template>

<script>
  import { ref, computed } from 'vue';
  import AppPage from '@/components/ui/AppPage.vue';
  import RequestTable from '@/components/requests/RequestTable.vue';
  import AppModal from '@/components/ui/AppModal.vue';
  import RequestModal from '@/components/requests/RequestModal.vue';
  import { useStore } from 'vuex';
  export default {
    setup() {
      const store = useStore();
      const modal = ref(false);
      const requests = ref(() => store.getters['request/requests']);
      return {
        modal,
        requests,
      };
    },
    components: {
      AppPage,
      RequestTable,
      AppModal,
      RequestModal,
    },
    name: 'Home',
  };
</script>
