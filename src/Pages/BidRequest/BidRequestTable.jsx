/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const BidRequestTable = ({ bids, handleAccept, handleReject }) => {

    // console.log(Object.keys(bids).join(","))

    const { _id, price, dateline, userEmail, buyerEmail, title, status } = bids || {};
    console.log(status)

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {title}
            </th>
            <td className="px-6 py-4">
                {userEmail}
            </td>
            <td className="px-6 py-4">
                {dateline}
            </td>
            <td className="px-6 py-4">
                {price}
            </td>
            <td className="px-6 py-4">
                {
                    status === 'reject' ? "Rejected" : status === 'accept' ? 'In Progress' : status === 'conform' ? 'Completed' : "Pending"
                }
            </td>
            <td className="px-6 py-4">
                {status === 'reject' ? "" : status === 'accept' ? "" : status === 'conform' ? "" : <button
                    onClick={() => handleReject(_id)}
                    className="flex items-center gap-3 text-md px-6 bg-[#25b65f]  justify-center py-2 cursor-pointer hover:bg-slate-700 duration-700 rounded-sm text-white">Reject</button>
                }
            </td>
            <td className="px-6 py-4">
                {
                    status === 'reject' ? "" : status === 'accept' ?  "" : status === 'conform' ? "" :
                        <button
                            onClick={() => handleAccept(_id)}
                            className="flex items-center gap-3 text-md px-6 bg-[#25b65f]  justify-center py-2 cursor-pointer hover:bg-slate-700 duration-700 rounded-sm text-white">Accept</button>}
            </td>
        </tr>
    );
};

export default BidRequestTable;