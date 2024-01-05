export type MethodType = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export async function callApi<D, R>(method: MethodType, url: string, data?: D): Promise<R> {
    const res = await fetch(url, {
        method: method,
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(data)
    })

    if (!res.ok) {
        throw Error("ça ne fonctionne pas")
    }

    return await res.json();
}


