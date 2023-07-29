import React, { useState } from 'react'
import AddChildren from '../../components/modal/AddChildren'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Form from './Form'


export const ChildrenList = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8 ">
                <div className='flex justify-end'>
                    <button className='bg-[#696BC2] text-white px-5 py-2 ' onClick={()=>setOpen(true)}>Add Child</button>

                </div>

                <dt class="text-[#6C6573] font-medium py-2"></dt>
                <div className=" rounded-lg border border-[#F2F2F4] h-40 w-full">

                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className="border-b  border-[#F3F3F3] bg-[#F9FBFC] ">
                                    <th scope="col" class="px-6 py-3 font-medium text-xs">S/N</th>
                                    <th scope="col" class="px-6 py-3 font-medium text-xs">Date</th>
                                    <th scope="col" class="px-6 py-3 font-medium text-xs">Name</th>
                                    <th scope="col" class="px-6 py-3 font-medium text-xs">Abuse ID</th>
                                    <th scope="col" class="px-6 py-3 font-medium text-xs">State</th>
                                    <th scope="col" class="px-6 py-3 font-medium text-xs">Country</th>
                                    <th scope="col" class="px-6 py-3 font-medium text-xs">Action</th>

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
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                                <button
                                                    type="button"
                                                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </Transition.Child>
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                                  Add New Child
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                <Form/>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}
