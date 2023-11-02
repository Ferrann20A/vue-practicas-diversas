<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/collatz">Conjetura de Collatz</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:"MenuComponent"
    }
</script>

<style>
    ul#menu li{
        display: inline;
    }
    li{
        padding: 10px
    }
</style>