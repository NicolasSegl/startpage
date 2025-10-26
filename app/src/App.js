import './App.css';
import { useEffect, useRef, memo } from 'react';

const TradingViewWidget = memo(() => {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "colorTheme": "dark",
          "dateRange": "1D",
          "locale": "en",
          "largeChartUrl": "",
          "isTransparent": false,
          "showFloatingTooltip": false,
          "plotLineColorGrowing": "rgba(5, 102, 86, 1)",
          "plotLineColorFalling": "rgba(156, 39, 176, 1)",
          "gridLineColor": "rgba(240, 243, 250, 0)",
          "scaleFontColor": "#DBDBDB",
          "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
          "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
          "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
          "tabs": [
            {
              "title": "Indices",
              "symbols": [
                {
                  "s": "TSX:VFV",
                  "d": "VFV",
                  "logoid": "vanguard",
                  "currency-logoid": "country/CA"
                },
                {
                  "s": "CFI:BTCCAD",
                  "d": "BTC",
                  "base-currency-logoid": "crypto/XTVCBTC",
                  "currency-logoid": "country/CA"
                }
              ],
              "originalTitle": "Indices"
            }
          ],
          "support_host": "https://www.tradingview.com",
          "backgroundColor": "#0f0f0f",
          "width": "400",
          "height": "550",
          "showSymbolLogo": true,
          "showChart": true
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/" rel="noopener nofollow" target="_blank"><span className="blue-text">Market summary</span></a><span className="trademark"> by TradingView</span></div>
    </div>
  );
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="main"
          style={{
            display: 'flex',
          }}
        >
          <img src="flowers.jfif" height="600" />
          <div
            style={{
              display: 'flex',
            }}
          >
            <p id="header">Spild ikke din elendighed</p>
            <TradingViewWidget />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
