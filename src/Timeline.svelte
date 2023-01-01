<script lang="ts">
    export let nodes: string[];
</script>

<div id=container>
    <svg width=100vw height=90vh>
        <line x1=50% y1={50 / nodes.length}% x2=50% y2={(nodes.length - 0.5) * 100 / nodes.length}% stroke-width=1% stroke=black />
        {#each nodes as node, i}
            <circle cx=50% cy={(i+0.5) * 100 / nodes.length}% r=1% stroke-width=1% stroke=black fill=white />
            <foreignObject x={(i%2-0.5)*40 + 50 - 15}% y={(i+0.5) * 100 / nodes.length}% width=30% height=20% >
                <h2 class={i%2? 'left': 'right'}>
                    {node}
                </h2>
            </foreignObject>
        {/each}
    </svg>
</div>

<style>
    @import url('https://fonts.googleapis.com/css?family=JetBrains+Mono');

    svg {
        position: absolute;
    }

    #container {
        overflow-y: hidden;
    }

    h2 {
        font-family: 'JetBrains Mono', monospace;
    }
    
    .left {
        text-align: right;
    }
    
    .right {
        text-align: left;
    }
</style>
