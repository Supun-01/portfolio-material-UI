import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { userName } from '../assets/text';
import { userToken } from '../assets/text';

import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";


function ProjectSection() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        // Fetch repository data
        const fetchRepos = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${userName}/repos`, {
                    headers: {
                        Authorization: userToken // optional
                    }
                });
                setRepos(response.data);
            } catch (error) {
                console.error('Error fetching repos:', error);
            }
        };

        fetchRepos();
    }, []);

    return (
        <div className="mx-10 my-20">
            {/* Title */}
            <div>
                <h1 className="text-center text-4xl lg:text-5xl">Projects</h1>
            </div>

            {/* Repository List */}
            <div>
                <ul className='p-10 flex flex-wrap justify-center'>
                    {repos.map((item, index) => (
                        <li key={index} className=' m-5 w-full lg:w-3/4'> {/* Full width on small screens, 1/3 on medium and up */}
                            <Card className=" w-full">
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        {item.name}
                                    </Typography>
                                    <Typography>
                                        {item.description || 'No description available'}
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <Button>
                                        <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                                            Read More
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
}

export default ProjectSection;
