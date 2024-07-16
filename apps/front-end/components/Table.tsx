import React from 'react';

interface Props {
    orders: []
}
const Table = (props: Props) => {
    const { orders } = props
    return (
        <div className="bg-black text-white p-4 rounded-md shadow-md">
            <table className="min-w-full table-fixed">
                <thead className="border-b border-gray-700">
                    <tr>
                        <th className="w-1/3 text-left text-sm font-medium px-4 py-2">Price (USDC)</th>
                        <th className="w-1/3 text-left text-sm font-medium px-4 py-2">Size (SOL)</th>
                        <th className="w-1/3 text-left text-sm font-medium px-4 py-2">Total (SOL)</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order: any, index) => (
                        <tr key={index} className={`border-b border-gray-700 ${order.isBid ? 'text-green-500' : 'text-red-500'}`}>
                            <td className="px-4 py-2 whitespace-nowrap">{order.price.toFixed(2)}</td>
                            <td className="px-4 py-2 whitespace-nowrap">{order.size.toFixed(2)}</td>
                            <td className="px-4 py-2 whitespace-nowrap">{order.total.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;



