<script lang="ts">
</script>

<div id=container-container>
    <div class=container>
        <span id=s>S</span>
        <span id=i>i</span>
        <span id=m>m</span>
        <span id=o>o</span>
        <span id=n>n</span>
    </div>
    <div class=container>
        <span id=d>D</span>
        <span id=dot>.</span>
        <span id=space>&nbsp</span>
        <span id=w>W</span>
        <span id=a>a</span>
        <span id=l-1>l</span>
        <span id=l-2>l</span>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css?family=JetBrains+Mono');

    #container-container {
        margin: 0;
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .container {
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        justify-content: center;

        font-family: 'JetBrains Mono', monospace;

        text-shadow: 10px 20px 30px #afafaf;
    }

    #s, #i, #m, #o, #n {
        font-size: 20vw;
    }

    #d, #dot, #space, #w, #a, #l-1, #l-2 {
        font-size: 10vw;
    }

    @keyframes slide-in-from-top {
        from {
            transform: translateY(-30vh);
            opacity: 0;
        }
        to {
            transform: translateY(0vh);
            opacity: 100;
        }
    }

    @keyframes slide-in-from-bottom {
        from {
            transform: translateY(30vh);
            opacity: 0;
        }
        to {
            transform: translateY(0vh);
            opacity: 100;
        }
    }

    #s {
        animation-name: slide-in-from-top;
        animation-duration: 2s;
    }

    #i {
        animation-name: slide-in-from-top;
        animation-duration: 2.7s;
    }

    #m {
        animation-name: slide-in-from-top;
        animation-duration: 3.6s;
    }

    #o {
        animation-name: slide-in-from-top;
        animation-duration: 1.1s;
    }

    #n {
        animation-name: slide-in-from-top;
        animation-duration: 2.5s;
    }

    #d {
        animation-name: slide-in-from-bottom;
        animation-duration: 4.7s;
    }

    #dot {
        animation-name: slide-in-from-bottom;
        animation-duration: 5.2s;
    }

    #w {
        animation-name: slide-in-from-bottom;
        animation-duration: 5.1s;
    }

    #a {
        animation-name: slide-in-from-bottom;
        animation-duration: 4.2s;
    }

    #l-1 {
        animation-name: slide-in-from-bottom;
        animation-duration: 3.9s;
    }

    #l-2 {
        animation-name: slide-in-from-bottom;
        animation-duration: 3.3s;
    }
</style>
