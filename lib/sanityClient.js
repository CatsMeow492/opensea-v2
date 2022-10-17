import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'gbv0tgl5',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'sktOB3nZC0yD6472LIW9stkHd0REGkvScpjHDgmiVzeNl5qLDnvMSatdqtctAWZPEGS01wPEjFJl4rxFcgXzRaKmUDsLHGQN410PTJQRCGgR94ZFHTBohAAOCm8sS4mKizRUvegBMhFqAbSkB33nKao0rHtA2IuzUlvXrSIBNVDvLRcvPph7',
    useCDN: false,
})