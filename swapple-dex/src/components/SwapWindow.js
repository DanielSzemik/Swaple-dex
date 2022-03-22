import './SwapWindow.css';

const SwapWindow = () => {
    const liquidityClicked = () => {
        console.log('click')
    }
    return (
        <div className="Rectangle-8">
             <div className="Rectangle-21">
                <span className="Exchange">Exchange</span>
            </div>
            <div onClick={liquidityClicked} className="Rectangle-20">
                <span className="Liquidity">Liquidity</span>
            </div>
        </div>
    )
}

export default SwapWindow;