<script>
import HeaderComponent from './components/HeaderComponent.vue';
import BalanceComponent from './components/BalanceComponent.vue';
import IncomeExpense from './components/IncomeExpense.vue';
import TransactionList from './components/TransactionList.vue';
import AddTransaction from './components/AddTransaction.vue';

export default {
  components: {
    HeaderComponent,
    BalanceComponent,
    IncomeExpense,
    TransactionList,
    AddTransaction
  }
}

</script>
<template>
  <HeaderComponent />
  <div class="container">
    <BalanceComponent />
    <IncomeExpense />
    <TransactionList />
    <AddTransaction />
  </div>
</template>
