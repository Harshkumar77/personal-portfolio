<script>
    import Nav from "$lib/Nav.svelte";
    import { pfp } from "../../data";
</script>

<h1 class="text-5xl text-c2 font-bold text-center my-4">Harsh Kumar</h1>
<img src={pfp} class="m-auto w-52 rounded-[1000px] mt-4" alt="Harsh Kumar" />
<p class="text-center text-2xl my-2">
    I am king
    <strong>Developer</strong> ,
    <strong>Thinker</strong> &
    <strong>Martial Artist</strong>
</p>

<style>
    h1 {
        text-shadow: 3px 3px #000;
    }
    img {
        border: solid 1.5px;
    }
    strong {
        @apply text-c2 text-3xl;
        text-shadow: 3px 3px lightgray;
    }
</style>
