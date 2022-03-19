import './SwapWindow.css';

const SwapWindow = () => {
    const liquidityClicked = () => {
        console.log('click')
    }
    return (
        <div class="Rectangle-8">
             <div class="Rectangle-21">
                <span class="Exchange">Exchange</span>
            </div>
            <div onClick={liquidityClicked} class="Rectangle-20">
                <span class="Liquidity">Liquidity</span>
            </div>
        </div>
    )
}

export default SwapWindow;