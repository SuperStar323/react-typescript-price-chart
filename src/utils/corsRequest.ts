import axiosServices from './axios';

export const corsRequest = (options: any, callback: any) => {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = `${cors}${options.url}`;
    const config = {
        method: options.method,
        url: endpoint
    };
    axiosServices(config)
        .then(({ data }) => {
            callback(data ?? []);
        })
        .catch(() => {
            callback([]);
        });
};
