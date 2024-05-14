<template>
  <h4
    v-if="requests.length === 0"
    class="text-center">
    Заявок пока нет
  </h4>
  <table
    v-else
    class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>ФИО</th>
        <th>Телефон</th>
        <th>Сумма</th>
        <th>Статус</th>
        <th>Действие</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(requests, index) in requests"
        :key="requests.id">
        <td>{{ index + 1 }}</td>
        <td>{{ requests.fio }}</td>
        <td>{{ requests.phone }}</td>
        <td>{{ requests.amount }}</td>
        <td>{{ requests.status }}</td>
        <td>
          <router-link
            custom
            :to="{ name: 'Request', params: { id: request.id } }"></router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    props: ['requests'],
  };
</script>
<style lang=""></style>
