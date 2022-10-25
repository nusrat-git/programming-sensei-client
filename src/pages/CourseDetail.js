import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const loadData = useLoaderData();

    return (
        <div>
            <div className="max-w-sm">
                <Card imgSrc={loadData.class_img}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Catergory: {loadData.category_name}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Class: {loadData.class_name}
                    </p>
                    <Button><Link to='/checkout'>Get premium access</Link></Button>
                </Card>
            </div>
        </div>
    );
};

export default CourseDetail;