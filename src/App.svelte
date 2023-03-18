<script lang="ts">
    import ProgrammingLanguage from "./ProgrammingLanguage.svelte";
    import Title from "./Title.svelte";
</script>

<div class=layout>
    <div style="grid-column: 1/4">
        <Title />
    </div>
    <div style="grid-column: 1/3;">
        <ProgrammingLanguage />
    </div>
    <div style="border: 2px solid black;" />
    <div style="border: 2px solid black;" />
    <div style="border: 2px solid black;" />
    <div style="border: 2px solid black;" />
    <div style="border: 2px solid black;" />
    <div style="border: 2px solid black;" />
    <div style="border: 2px solid black;" />
    <div style="border: 2px solid black;" />
    <div style="border: 2px solid black;" />
    <div style="border: 2px solid black;" />
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
