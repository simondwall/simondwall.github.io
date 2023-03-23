<div class=layout>
    <div style="grid-column: 1/4">
        <slot name="title"/>
    </div>
    <slot />
</div>

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Old+Standard+TT">
<style>
    :global(body) {
        font-family: "Old Standard TT";
    }

    .layout {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    @media screen and (min-width: 480px) {
        .layout {
            display: grid;
            grid-template-columns: 3fr 4fr 3fr;
            grid-auto-rows: minmax(10vh, auto);
        }
    }

    @media screen and (min-width: 1080px) {
        .layout {
            margin-left: 10%;
            margin-right: 10%;
            box-shadow: 10px 10px 20px 5px #60606040;
            padding: 30px;
        }
    }

    @media screen and (min-width: 2000px) {
        .layout {
            margin-left: 20%;
            margin-right: 20%;
        }
    }
</style>
