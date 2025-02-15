// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function checkUser(userData) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://dynamic-qr-xi.vercel.app/user/login", {
        method : "POST",
        body : JSON.stringify(userData),
        credentials: 'include',
        headers : {'content-type' : 'application/json'}
      })
      if (response.ok) {
        const data = await response.json()
        resolve({data})
      }else{
        const error = await response.json()
        reject(error)
      }
    } catch (error) {
      reject(error)
    }
  });
}

export function getAllParticipants() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://dynamic-qr-xi.vercel.app/participants/", {
        method : "GET",
        credentials: 'include',
      })
      if (response.ok) {
        const data = await response.json()
        resolve({data})
      }else{
        const error = await response.json()
        reject(error)
      }
    } catch (error) {
      reject(error)
    }
  });
}

export function getAllEntries() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://dynamic-qr-xi.vercel.app/entry/", {
        method : "GET",
        credentials: 'include',
      })
      if (response.ok) {
        const data = await response.json()
        resolve({data})
      }else{
        const error = await response.json()
        reject(error)
      }
    } catch (error) {
      reject(error)
    }
  });
}

export function createParticipant(userData) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://dynamic-qr-xi.vercel.app/participants/create", {
        method : "POST",
        body : JSON.stringify(userData),
        credentials: 'include',
        headers : {'content-type' : 'application/json'}
      })
      if (response.ok) {
        const data = await response.json()
        resolve({data})
      }else{
        const error = await response.json()
        reject(error)
      }
    } catch (error) {
      reject(error)
    }
  });
}

export function bulkQrSend(userData) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://dynamic-qr-xi.vercel.app/participants/createBulk", {
        method : "POST",
        body : userData,
        credentials: 'include'
      })
      if (response.ok) {
        const data = await response.json()
        resolve({data})
      }else{
        const error = await response.json()
        reject(error)
      }
    } catch (error) {
      reject(error)
    }
  });
}

export function sendPersonalQr(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://dynamic-qr-xi.vercel.app/qrCode/sendPersonal", {
        method : "POST",
        body : JSON.stringify({id}),
        credentials: 'include',
        headers : {'content-type' : 'application/json'}
      })
      if (response.ok) {
        const data = await response.json()
        resolve({data})
      }else{
        const error = await response.json()
        reject(error)
      }
    } catch (error) {
      reject(error)
    }
  });
}

export function VerifyQr(data) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://dynamic-qr-xi.vercel.app/qrCode/verify", {
        method : "POST",
        body : JSON.stringify({data : data.code , admin : data.admin}),
        credentials: 'include',
        headers : {'content-type' : 'application/json'}
      })
      if (response.ok) {
        const data = await response.json()
        resolve({data})
      }else{
        const error = await response.json()
        reject(error)
      }
    } catch (error) {
      reject(error)
    }
  });
}

export function sendEveryoneQr() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://dynamic-qr-xi.vercel.app/qrCode/generateQr", {
        method : "POST",
        credentials: 'include'
      })
      if (response.ok) {
        const data = await response.json()
        resolve({data})
      }else{
        const error = await response.json()
        reject(error)
      }
    } catch (error) {
      reject(error)
    }
  });
}

export function deleteParticipant(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://dynamic-qr-xi.vercel.app/participants/" + id, {
        method : "DELETE",
        credentials: 'include'
      })
      if (response.ok) {
        const data = await response.json()
        resolve({data})
      }else{
        const error = await response.json()
        reject(error)
      }
    } catch (error) {
      reject(error)
    }
  });
}



export function AddSavedPost(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://dynamic-qr-xi.vercel.app/auth/saved/" + id, {
        method : "PATCH",
        credentials: 'include'
      })
      if (response.ok) {
        const data = await response.json()
        resolve({data})
      }else{
        const error = await response.json()
        reject(error)
      }
    } catch (error) {
      reject(error)
    }
  });
}

export function getUserInfo(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`https://dynamic-qr-xi.vercel.app/auth/user/${id}`, {
        method : "GET",
        credentials: 'include',
      })
      if (response.ok) {
        const data = await response.json()
        resolve({data})
      }else{
        const error = await response.json()
        reject(error)
      }
    } catch (error) {
      reject(error)
    }
  });
}


