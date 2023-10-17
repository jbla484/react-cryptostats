import '../Styles/TableHeader.css';

export default function TableHeader() {
    return (
        <thead>
            <tr>
                <th
                    style={{
                        left: '0px',
                        zIndex: 10,
                    }}
                >
                    Rank
                </th>
                <th
                    style={{
                        left: '55px',
                        zIndex: 10,
                    }}
                >
                    Name
                </th>
                <th>Price</th>
                <th>1h %</th>
                <th>1d %</th>
                <th>1w %</th>
                <th>Market Cap</th>
                <th>Volume</th>
                <th>Available Supply</th>
                <th>Total Supply</th>
            </tr>
        </thead>
    );
}
