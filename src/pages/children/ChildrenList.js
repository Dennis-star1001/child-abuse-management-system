import React, { useState } from "react";
import AddChildren from "../../components/modal/AddChildren";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Form from "./Form";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { getData } from "../../api/api";
import DeleteModal from "../../components/DeleteModal";
// import axios from 'axios'

export const ChildrenList = ({ loadChildren, children }) => {
  // console.log(children, "list");
  const [open, setOpen] = useState(false);
  // console.log(children);
  return (
    <Box pl='64'>
      <div className='mx-auto max-w-7xl  sm:px-6 lg:px-8 '>
        <div className='flex justify-end'>
          <button
            className='bg-[#696BC2] text-white px-5 py-2 '
            onClick={() => setOpen(true)}>
            Add Child
          </button>
        </div>
        <dt className='text-[#36224b] font-medium py-2'></dt>
        <div className=' rounded-lg border border-[#F2F2F4]  w-full'>
          <div className='relative overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr className='border-b  border-[#F3F3F3] bg-[#F9FBFC] '>
                  <th scope='col' className='px-6 py-3 font-medium text-xs'>
                    S/N
                  </th>
                  <th scope='col' className='px-6 py-3 font-medium text-xs'>
                    Name
                  </th>
                  <th scope='col' className='px-6 py-3 font-medium text-xs'>
                    Email
                  </th>
                  <th scope='col' className='px-6 py-3 font-medium text-xs'>
                    Abuse ID
                  </th>
                  <th scope='col' className='px-6 py-3 font-medium text-xs'>
                    Age
                  </th>
                  <th scope='col' className='px-6 py-3 font-medium text-xs'>
                    Address
                  </th>
                  <th scope='col' className='px-6 py-3 font-medium text-xs'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {children &&
                  children.map((data, index) => {
                    return (
                      <tr
                        key={index}
                        className='bg-white font-medium dark:bg-gray-800 border-b border-[#F3F3F3]'>
                        <td className='px-6 py-4'>{data.id}</td>
                        <td className='px-6 py-4'>
                          {data.username} {data.lastname}
                        </td>
                        <td className='px-6 py-4'>{data.email}</td>
                        <td className='px-6 py-4'>Abuse ID</td>
                        <td className='px-6 py-4'>{data.age}</td>
                        <td className='px-6 py-4'>{data.address}</td>
                        <td className='px-6 py-4 flex items-center gap-2'>
                          <button
                            type='button'
                            className='font-medium p-2 mr-1 text-white hover:text-indigo-500 bg-[#696BC2]'>
                            Edit
                          </button>

                          <DeleteModal
                            loadChildren={loadChildren}
                            child={data}
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>{" "}
          </div>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'>
                  <Dialog.Panel className='pointer-events-auto relative w-screen max-w-md'>
                    <Transition.Child
                      as={Fragment}
                      enter='ease-in-out duration-500'
                      enterFrom='opacity-0'
                      enterTo='opacity-100'
                      leave='ease-in-out duration-500'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'>
                      <div className='absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4'>
                        <button
                          type='button'
                          className='rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                          onClick={() => setOpen(false)}>
                          <span className='sr-only'>Close panel</span>
                          <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
                      <div className='px-4 sm:px-6'>
                        <Dialog.Title className='text-base font-semibold leading-6 text-gray-900'>
                          Add New Child
                        </Dialog.Title>
                      </div>
                      <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                        <Form />
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </Box>
  );
};
