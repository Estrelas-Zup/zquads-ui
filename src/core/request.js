export const getAuthorization = () => {
  const token = localStorage.getItem('token') ?? ''

  return {
    Authorization: `Bearer ${token}`,
  }
}

export const headers = {
  Accept: 'application/json',
  'Accept-Language': 'pt-BR',
  'X-Application-Id': '1',
  'X-Organization-Slug': 'estrelas',
  ...getAuthorization()
}