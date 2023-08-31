<script>
    export let data;
    if (data.success == false) {
        window.location.replace("https://dev.to/harshkumar77");
    }
</script>

<h1 class="text-5xl text-c2 font-bold text-center my-6">Blog</h1>
{#if data.success && data.articles}
    {#each data.articles as a}
        <div
            class="p-4 outline outline-c1 outline-2 rounded-md mb-3 hover:outline-4"
        >
            <a
                href={a.url}
                class="text-2xl text-[brown] hover:underline"
                target="_blank"
            >
                {a.title}
            </a>
            <p class="text-c4 font-bold">
                {a.tags}
            </p>
        </div>
    {/each}
{/if}

<style>
    h1 {
        text-shadow: 3px 3px #000;
    }
</style>
