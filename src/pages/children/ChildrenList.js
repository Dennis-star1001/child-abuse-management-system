import React from 'react'

export const ChildrenList = () => {
    return (
        <div>
            <header className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-medium tracking-tight text-gray-900">Children List</h1>
                </div>
            </header>

            <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8 ">
                <dt class="text-[#6C6573] font-medium py-2"></dt>
                <div className=" rounded-lg border border-[#F2F2F4] h-40 w-full">

                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="border-b border-[#F3F3F3]">
                                    <th scope="col" class="px-6 py-3">S/N</th>
                                    <th scope="col" class="px-6 py-3">Date</th>
                                    <th scope="col" class="px-6 py-3">Name</th>
                                    <th scope="col" class="px-6 py-3">Abuse ID</th>
                                    <th scope="col" class="px-6 py-3">State</th>
                                    <th scope="col" class="px-6 py-3">Country</th>
                                    <th scope="col" class="px-6 py-3">Action</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr className="bg-white font-medium dark:bg-gray-800 border-b border-[#F3F3F3]">

                                    <td class="px-6 py-4">1</td>
                                    <td class="px-6 py-4">Malcolm Lockyer</td>
                                    <td class="px-6 py-4">1961</td>
                                    <td class="px-6 py-4">1961</td>
                                    <td class="px-6 py-4">1961</td>
                                    <td class="px-6 py-4">1961</td>
                                    <td class="px-6 py-4 ">
                                        <button
                                            type="button"
                                            className="font-medium p-2 mr-1 text-white hover:text-indigo-500 bg-[#696BC2]">
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="font-medium p-2 mx-1 text-white hover:text-indigo-500 bg-[#FF0000]">
                                            Delete
                                        </button>
                                    </td>


                                </tr>
                                <tr class="font-medium bg-white dark:bg-gray-800 border-b border-[#F3F3F3]">

                                    <td class="px-6 py-4">2</td>
                                    <td class="px-6 py-4">Malcolm Lockyer</td>
                                    <td class="px-6 py-4">1961</td>
                                    <td class="px-6 py-4">1961</td>
                                    <td class="px-6 py-4">1961</td>
                                    <td class="px-6 py-4">1961</td>
                                    <td class="px-6 py-4 ">
                                        <button
                                            type="button"
                                            className="font-medium p-2 mr-1 text-white hover:text-indigo-500 bg-[#696BC2]">
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="font-medium p-2 mx-1 text-white hover:text-indigo-500 bg-[#FF0000]">
                                            Delete
                                        </button>
                                    </td>


                                </tr>
                                <tr class="font-medium bg-white dark:bg-gray-800 border-b border-[#F3F3F3]">

                                    <td class="px-6 py-4">3</td>
                                    <td class="px-6 py-4">Malcolm Lockyer</td>
                                    <td class="px-6 py-4">1961</td>
                                    <td class="px-6 py-4">1961</td>
                                    <td class="px-6 py-4">1961</td>
                                    <td class="px-6 py-4">1961</td>
                                    <td class="px-6 py-4 ">
                                        <button
                                            type="button"
                                            className="font-medium p-2 mr-1 text-white hover:text-indigo-500 bg-[#696BC2]">
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="font-medium p-2 mx-1 text-white hover:text-indigo-500 bg-[#FF0000]">
                                            Delete
                                        </button>
                                    </td>



                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}
