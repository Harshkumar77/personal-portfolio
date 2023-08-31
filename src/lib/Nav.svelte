<nav class="mt-2">
    {#each [["Home", "/", "ri-home-line"], ["Blog", "/blog", "ri-article-line"], ["Contact Me", "/contact-me", "ri-contacts-fill"], ["News Letter", "/news-letter", "ri-newspaper-line"], ["Projects", "/projects", "ri-window-2-line"]] as [name, path, icon]}
        <a class="text-sm hover:underline border-dotted border-2 p-1 m-1" href={path}>
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
    a:hover {
        opacity: 1;
    }
</style>
