<script>
    import { page } from "$app/stores";
    let routes = [
        ["Home", "/", "ri-home-line"],
        ["Resume", "/resume", "ri-briefcase-line"],
        ["Blog", "/blog", "ri-article-line"],
        ["Contact Me", "/contact-me", "ri-contacts-fill"],
        ["News Letter", "/news-letter", "ri-newspaper-line"],
        // ["Projects", "/projects", "ri-window-2-line"],
    ];
</script>

<nav class="mt-2">
    {#each routes as [name, path, icon]}
        <a
            class="text-sm hover:underline outline-dotted outline-2 p-1 m-1"
            href={path}
            class:cur={$page.url.pathname === path}
        >
            <i class="{icon} text-[10px]" />
            {name}
        </a>
    {/each}
</nav>

<style>
    nav {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    a {
        opacity: 0.4;
        transition: opacity 50ms;
        transition: underline 50ms;
    }
    a:hover,
    .cur {
        opacity: 1;
    }
    .cur {
        outline-color: brown;
        outline-width: 0.19rem;
        outline-style: dashed;
    }
</style>
