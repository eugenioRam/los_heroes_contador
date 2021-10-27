<template>
    <div class="footer">
        <div class="label_total">
            <h2 class="total_registros">Total registros: {{total}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "footer",
    data() {
        return {
            items: [],
        };
    },
    computed: {
        list() {
            return this.$store.state.contador.list;
        },
        total() {
            return this.$store.state.contador.total;
        },
    }
};
</script>

<style>
.footer {
    padding: 5px;
    display: flex;
    flex-direction: row;
    background-color: #f88a33;
}
.total_area {
    flex-grow: 12;
    text-align: start !important;
    padding-left: 8%;
    display: flex;
}
.label_total {
    flex-grow: 11;
    align-self: center;
    text-align: right;
    padding-right: 8%;
}

</style>