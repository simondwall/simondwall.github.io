<script lang="ts">
    let number = 20;
</script>

<svg width=100vw height=100vh>
    {#each Array(number) as _, i}
        <line x1={i * 100 / number}% y1={Math.sin(i / number * 10) * 3 + 10}% x2={i * 100 / number}% y2=0% stroke=#efefef stroke-width=0.5% />
    {/each}
</svg>
