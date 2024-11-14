// require('dotenv').config();

// Full list of currencies
const currencies = [
    { code: "AED", name: "United Arab Emirates Dirham", symbol: "د.إ" },
    { code: "AFN", name: "Afghan Afghani", symbol: "؋" },
    { code: "ALL", name: "Albanian Lek", symbol: "L" },
    { code: "AMD", name: "Armenian Dram", symbol: "֏" },
    { code: "ANG", name: "Netherlands Antillean Guilder", symbol: "ƒ" },
    { code: "AOA", name: "Angolan Kwanza", symbol: "Kz" },
    { code: "ARS", name: "Argentine Peso", symbol: "$" },
    { code: "AUD", name: "Australian Dollar", symbol: "A$" },
    { code: "AWG", name: "Aruban Florin", symbol: "ƒ" },
    { code: "AZN", name: "Azerbaijani Manat", symbol: "₼" },
    { code: "BAM", name: "Bosnia and Herzegovina Convertible Mark", symbol: "KM" },
    { code: "BBD", name: "Barbadian Dollar", symbol: "$" },
    { code: "BDT", name: "Bangladeshi Taka", symbol: "৳" },
    { code: "BGN", name: "Bulgarian Lev", symbol: "лв" },
    { code: "BHD", name: "Bahraini Dinar", symbol: ".د.ب" },
    { code: "BIF", name: "Burundian Franc", symbol: "Fr" },
    { code: "BMD", name: "Bermudian Dollar", symbol: "$" },
    { code: "BND", name: "Brunei Dollar", symbol: "B$" },
    { code: "BOB", name: "Bolivian Boliviano", symbol: "Bs." },
    { code: "BRL", name: "Brazilian Real", symbol: "R$" },
    { code: "BSD", name: "Bahamian Dollar", symbol: "$" },
    { code: "BTN", name: "Bhutanese Ngultrum", symbol: "Nu." },
    { code: "BWP", name: "Botswana Pula", symbol: "P" },
    { code: "BYN", name: "Belarusian Ruble", symbol: "Br" },
    { code: "BZD", name: "Belize Dollar", symbol: "BZ$" },
    { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
    { code: "CDF", name: "Congolese Franc", symbol: "Fr" },
    { code: "CHF", name: "Swiss Franc", symbol: "CHF" },
    { code: "CLP", name: "Chilean Peso", symbol: "$" },
    { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
    { code: "COP", name: "Colombian Peso", symbol: "$" },
    { code: "CRC", name: "Costa Rican Colón", symbol: "₡" },
    { code: "CUP", name: "Cuban Peso", symbol: "$" },
    { code: "CVE", name: "Cape Verdean Escudo", symbol: "$" },
    { code: "CZK", name: "Czech Koruna", symbol: "Kč" },
    { code: "DKK", name: "Danish Krone", symbol: "kr" },
    { code: "DOP", name: "Dominican Peso", symbol: "$" },
    { code: "DZD", name: "Algerian Dinar", symbol: "د.ج" },
    { code: "EGP", name: "Egyptian Pound", symbol: "£" },
    { code: "ERN", name: "Eritrean Nakfa", symbol: "Nkf" },
    { code: "ETB", name: "Ethiopian Birr", symbol: "Br" },
    { code: "EUR", name: "Euro", symbol: "€" },
    { code: "FJD", name: "Fijian Dollar", symbol: "FJ$" },
    { code: "FKP", name: "Falkland Islands Pound", symbol: "£" },
    { code: "GBP", name: "British Pound Sterling", symbol: "£" },
    { code: "GEL", name: "Georgian Lari", symbol: "₾" },
    { code: "GHS", name: "Ghanaian Cedi", symbol: "₵" },
    { code: "GIP", name: "Gibraltar Pound", symbol: "£" },
    { code: "GMD", name: "Gambian Dalasi", symbol: "D" },
    { code: "GNF", name: "Guinean Franc", symbol: "Fr" },
    { code: "GTQ", name: "Guatemalan Quetzal", symbol: "Q" },
    { code: "GYD", name: "Guyanese Dollar", symbol: "GY$" },
    { code: "HKD", name: "Hong Kong Dollar", symbol: "HK$" },
    { code: "HNL", name: "Honduran Lempira", symbol: "L" },
    { code: "HRK", name: "Croatian Kuna", symbol: "kn" },
    { code: "HTG", name: "Haitian Gourde", symbol: "G" },
    { code: "HUF", name: "Hungarian Forint", symbol: "Ft" },
    { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp" },
    { code: "ILS", name: "Israeli New Shekel", symbol: "₪" },
    { code: "INR", name: "Indian Rupee", symbol: "₹" },
    { code: "IQD", name: "Iraqi Dinar", symbol: "ع.د" },
    { code: "IRR", name: "Iranian Rial", symbol: "﷼" },
    { code: "ISK", name: "Icelandic Króna", symbol: "kr" },
    { code: "JMD", name: "Jamaican Dollar", symbol: "J$" },
    { code: "JPY", name: "Japanese Yen", symbol: "¥" },
    { code: "KES", name: "Kenyan Shilling", symbol: "KSh" },
    { code: "KGS", name: "Kyrgyzstani Som", symbol: "с" },
    { code: "KHR", name: "Cambodian Riel", symbol: "៛" },
    { code: "KPW", name: "North Korean Won", symbol: "₩" },
    { code: "KRW", name: "South Korean Won", symbol: "₩" },
    { code: "KWD", name: "Kuwaiti Dinar", symbol: "د.ك" },
    { code: "KYD", name: "Cayman Islands Dollar", symbol: "KY$" },
    { code: "KZT", name: "Kazakhstani Tenge", symbol: "₸" },
    { code: "LAK", name: "Lao Kip", symbol: "₭" },
    { code: "LBP", name: "Lebanese Pound", symbol: "ل.ل" },
    { code: "LKR", name: "Sri Lankan Rupee", symbol: "Rs" },
    { code: "LRD", name: "Liberian Dollar", symbol: "L$" },
    { code: "LSL", name: "Lesotho Loti", symbol: "L" },
    { code: "LYD", name: "Libyan Dinar", symbol: "ل.د" },
    { code: "MAD", name: "Moroccan Dirham", symbol: "د.م." },
    { code: "MDL", name: "Moldovan Leu", symbol: "L" },
    { code: "MGA", name: "Malagasy Ariary", symbol: "Ar" },
    { code: "MKD", name: "Macedonian Denar", symbol: "ден" },
    { code: "MMK", name: "Myanmar Kyat", symbol: "K" },
    { code: "MNT", name: "Mongolian Tögrög", symbol: "₮" },
    { code: "MOP", name: "Macanese Pataca", symbol: "MOP$" },
    { code: "MRU", name: "Mauritanian Ouguiya", symbol: "UM"},
    { code: "MUR", name: "Mauritian Rupee", symbol: "₨" },
    { code: "MVR", name: "Maldivian Rufiyaa", symbol: "Rf" },
    { code: "MWK", name: "Malawian Kwacha", symbol: "MK" },
    { code: "MXN", name: "Mexican Peso", symbol: "$" },
    { code: "MYR", name: "Malaysian Ringgit", symbol: "RM" },
    { code: "MZN", name: "Mozambican Metical", symbol: "MT" },
    { code: "NAD", name: "Namibian Dollar", symbol: "N$" },
    { code: "NGN", name: "Nigerian Naira", symbol: "₦" },
    { code: "NIO", name: "Nicaraguan Córdoba", symbol: "C$" },
    { code: "NOK", name: "Norwegian Krone", symbol: "kr" },
    { code: "NPR", name: "Nepalese Rupee", symbol: "Rs" },
    { code: "NZD", name: "New Zealand Dollar", symbol: "NZ$" },
    { code: "OMR", name: "Omani Rial", symbol: "ر.ع." },
    { code: "PAB", name: "Panamanian Balboa", symbol: "B/." },
    { code: "PEN", name: "Peruvian Sol", symbol: "S/" },
    { code: "PGK", name: "Papua New Guinean Kina", symbol: "K" },
    { code: "PHP", name: "Philippine Peso", symbol: "₱" },
    { code: "PKR", name: "Pakistani Rupee", symbol: "₨" },
    { code: "PLN", name: "Polish Zloty", symbol: "zł" },
    { code: "PYG", name: "Paraguayan Guarani", symbol: "₲" },
    { code: "QAR", name: "Qatari Rial", symbol: "ر.ق" },
    { code: "RON", name: "Romanian Leu", symbol: "lei" },
    { code: "RSD", name: "Serbian Dinar", symbol: "дин." },
    { code: "RUB", name: "Russian Ruble", symbol: "₽" },
    { code: "RWF", name: "Rwandan Franc", symbol: "Fr" },
    { code: "SAR", name: "Saudi Riyal", symbol: "ر.س" },
    { code: "SBD", name: "Solomon Islands Dollar", symbol: "SI$" },
    { code: "SCR", name: "Seychellois Rupee", symbol: "₨" },
    { code: "SDG", name: "Sudanese Pound", symbol: "ج.س." },
    { code: "SEK", name: "Swedish Krona", symbol: "kr" },
    { code: "SGD", name: "Singapore Dollar", symbol: "S$" },
    { code: "SHP", name: "Saint Helena Pound", symbol: "£" },
    { code: "SLL", name: "Sierra Leonean Leone", symbol: "Le" },
    { code: "SOS", name: "Somali Shilling", symbol: "S" },
    { code: "SRD", name: "Surinamese Dollar", symbol: "$" },
    { code: "SSP", name: "South Sudanese Pound", symbol: "£" },
    { code: "STN", name: "São Tomé and Príncipe Dobra", symbol: "Db" },
    { code: "SVC", name: "Salvadoran Colón", symbol: "$" },
    { code: "SZL", name: "Swazi Lilangeni", symbol: "E" },
    { code: "THB", name: "Thai Baht", symbol: "฿" },
    { code: "TJS", name: "Tajikistani Somoni", symbol: "SM" },
    { code: "TMT", name: "Turkmenistani Manat", symbol: "m" },
    { code: "TND", name: "Tunisian Dinar", symbol: "د.ت" },
    { code: "TOP", name: "Tongan Paʻanga", symbol : "T$" },
    { code: "TRY", name: "Turkish Lira", symbol: "₺" },
    { code: "TTD", name: "Trinidad and Tobago Dollar", symbol: "TT$" },
    { code: "TWD", name: "New Taiwan Dollar", symbol: "NT$" },
    { code: "TZS", name: "Tanzanian Shilling", symbol: "TSh" },
    { code: "UAH", name: "Ukrainian Hryvnia", symbol: "₴" },
    { code: "UGX", name: "Ugandan Shilling", symbol: "USh" },
    { code: "USD", name: "United States Dollar", symbol: "$" },
    { code: "UYU", name: "Uruguayan Peso", symbol: "$" },
    { code: "UZS", name: "Uzbekistani Som", symbol: "лв" },
    { code: "VES", name: "Venezuelan Bolívar Soberano", symbol: "Bs.S" },
    { code: "VND", name: "Vietnamese Dong", symbol: "₫" },
    { code: "VUV", name: "Vanuatu Vatu", symbol: "Vt" },
    { code: "WST", name: "Samoan Tala", symbol: "T" },
    { code: "XAF", name: "Central African CFA Franc", symbol: "Fr" },
    { code: "XAG", name: "Silver Ounce", symbol: "oz" },
    { code: "XAU", name: "Gold Ounce", symbol: "oz" },
    { code: "XCD", name: "East Caribbean Dollar", symbol: "$" },
    { code: "XDR", name: "Special Drawing Rights", symbol: "SDR" },
    { code: "XOF", name: "West African CFA Franc", symbol: "Fr" },
    { code: "XPF", name: "CFP Franc", symbol: "Fr" },
    { code: "YER", name: "Yemeni Rial", symbol: "﷼" },
    { code: "ZAR", name: "South African Rand", symbol: "R" },
    { code: "ZMW", name: "Zambian Kwacha", symbol: "ZK" },
    { code: "ZWL", name: "Zimbabwean Dollar", symbol: "Z$" }
];

// Populate currency select options
const sel1 = document.getElementById('sel1');
const sel2 = document.getElementById('sel2');

currencies.forEach(currency => {
    const option1 = document.createElement('option');
    option1.value = currency.code;
    option1.textContent = `${currency.code} - ${currency.name}`;
    sel1.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = currency.code;
    option2.textContent = `${currency.code} - ${currency.name}`;
    sel2.appendChild(option2);
});

document.getElementById('convertBtn').addEventListener('click', function() {
    const amount = document.getElementById('oamount').value;
    const fromCurrency = document.getElementById('sel1').value;
    const toCurrency = document.getElementById('sel2').value;

    if (amount && fromCurrency && toCurrency) {
        const apiKey = 'Replace with your API key';
        const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[toCurrency];
                const convertedAmount = (amount * rate).toFixed(2);
                document.getElementById('result').innerText = `${amount} ${currencies.find(c => c.code === fromCurrency).symbol} = ${convertedAmount} ${currencies.find(c => c.code === toCurrency).symbol}`;
            })
            .catch(error => {
                console.error('Error fetching exchange rates:', error);
                document.getElementById('result').innerText = 'Error fetching exchange rates. Please try again later.';
            });
    } else {
        document.getElementById('result').innerText = 'Please fill in all fields.';
    }
});