import { useState } from 'react';
import Head from 'next/head';
import { BiUserPlus } from 'react-icons/bi';
import Table from '../components/Table';
import Form from '../components/Form';

export default function Home() {
  const [visible, setVisible] = useState(false);

  const handleAddEmployee = () => {
    setVisible(!visible);
  };

  return (
    <section>
      <Head>
        <title>CRUD App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-5 mx-auto overflow-x-hidden">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Employee Management
        </h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button
              onClick={handleAddEmployee}
              className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-0 hover:border-indigo-500 hover:bg-white hover:text-indigo-800 duration-300"
            >
              Add Employee{' '}
              <span className="px-1">
                <BiUserPlus size={23}></BiUserPlus>
              </span>
            </button>
          </div>
        </div>

        {/* Collapsable Form */}
        {visible && <Form />}

        {/* Table */}
        <div className="mx-auto w-full m-5">
          <Table />
        </div>
      </main>
    </section>
  );
}
