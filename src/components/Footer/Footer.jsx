// import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-100 border border-t-2 border-gray-200">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between px-5">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="65px" className="text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">
                                    &copy; Copyright 2024. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                                Resources
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="inline-bock px-1 py-2 duration-200 hover:bg-blue-100 rounded-full"
                                        to="/"
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="inline-bock px-1 py-2 duration-200 hover:bg-blue-100 rounded-full"
                                        to="/"
                                    >
                                        Support
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="inline-bock px-1 py-2 duration-200 hover:bg-blue-100 rounded-full"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="inline-bock px-1 py-2 duration-200 hover:bg-blue-100 rounded-full"
                                        to="/"
                                    >
                                        Help Center
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="inline-bock px-1 py-2 duration-200 hover:bg-blue-100 rounded-full"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="inline-bock px-1 py-2 duration-200 hover:bg-blue-100 rounded-full"
                                        to="/"
                                    >
                                        Submit Bugs
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Contact Us
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="inline-bock px-3 py-2"
                                        to="/"
                                    >
                                        XXX San Francisco, CA
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="inline-bock px-3 py-2 duration-200 hover:bg-blue-100 rounded-full"
                                        to="/"
                                    >
                                        contact@company.com
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer;