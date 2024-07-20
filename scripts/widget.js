// Create a new script element
const script = document.createElement('script');

// Set attributes for the script element
script.type = 'text/javascript';
script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
script.async = true;

// Append the script element to the document head or body


new TradingView.widget({
    "symbols": [
        { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500 Index" },
        { "proName": "FOREXCOM:NSXUSD", "title": "US 100 Cash CFD" },
        { "proName": "FX_IDC:EURUSD", "title": "EUR to USD" },
        { "proName": "BITSTAMP:BTCUSD", "title": "Bitcoin" },
        { "proName": "BITSTAMP:ETHUSD", "title": "Ethereum" }
    ],
    "showSymbolLogo": false,
    "isTransparent": false,
    "displayMode": "adaptive",
    "colorTheme": "dark",
    "locale": "en"
});