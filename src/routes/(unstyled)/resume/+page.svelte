<script>
    export let data;
</script>

{#if data.link}
    <meta http-equiv="refresh" content="0;url={data.link}" />
    <p>Redirecting to {data.link}</p>
{/if}


