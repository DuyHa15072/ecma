import instance from "./instance";

export const getAll = () => {
    const url = "/users";
    return instance.get(url);
};

export const get = (id) => {
    const url = `/users/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/users/${id}`;
    return instance.delete(url);
};

export const add = (user) => {
    const url = `/users`;
    return instance.post(url, user);
};
export const edit = (user) => {
    const url = `/users/${user.id}`;
    return instance.put(url, user);
};