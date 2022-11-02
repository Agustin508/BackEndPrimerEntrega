const config= {
    fileSystem: {
        path: './DB'
    },
    mongoDB:{
        cnxStr: 'mongodb://127.0.0.1:27017/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase:{
        "type": "service_account",
        "project_id": "backend-561d4",
        "private_key_id": "4c4e764438c74f6e96f9c6ad9b6c100c8b002578",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCseyoHo/ltG5CI\niCBcWwJ0oNW+8Rlq/jbVDqSyKkkVA/IVaROJVRzOr9+SbBIClS5wbN1sLLp86zC9\nqznJB0VIMKc/DLqHohjw6rGkr/MLc5FD59bge4wx4/THzmYpWIqfNuT6POvCNvia\ndmjV24hTdAEicX7Pf5EP2fpMHZt2eiptY+2OVG5usB5QO0qoA3DT0M8X7HwrTRGt\nScjHm1sBLOum03WLNEVsaRS5UFtmg3IHiRVDpcJ+JNWFOBx7rFsQRjy5rC2zdbAQ\nIMOw00UGFsx24CMfgipK4f3QcbJhP142csf/0JDuQBUhGkQcBpzxYKEEu47XRbES\nCbYqKxU/AgMBAAECggEARbyIek1cgDZIYkNznhO38vLCaTCu/7jn7427nkOFh+cv\n/mMdIIYWnySxxtBGGeA6Rf9mKSIOhopLCyzLMNHtO6pcPJxHYKZz4hhqGbWAFY20\n2plGoj2hqdxKcGytlqLzbTszKk/uXHiAXGdqrKjVvjQlb0knJfskah3OWu8Pl79T\ns3B6pWVW3FZj7VeDPQEHaj6Mesb+wG3I3C3RVMv7scxVYC1eygvpOq4O4nUGRDbQ\n2akggcDT63MjbOIwOgdSjHYg1qrjwJZVHt6xGmhujCjXaxtQDFsx8u8TbIn7dZL9\nqQI3WE1X7iGSkFk9WHD1vINGtlmRS1VBnJpLEu9baQKBgQDi4tcsyovjVIRGZUHD\nl038xCqR+2xt3wEqdSOoGqsbD7yreC3WYfYVrKjwJG42rx9tsKkjtQjWiUuORrGU\nchG3rUYEux+lttaZeLFfEzkZXf02jdLqPRu/NWP55LDdKQeFSe3MW9c2EhlGzoC4\nl+YStyuQFLaWkb7GliqkNfi8qQKBgQDCnSGuUVh11MlKeDL9/t3cy+jbINLqZb04\n9YIrrvgZgztc9o0Xj5Z87+AgP5M325/jKGsvbxg45DTkhmUN0LaMh7s6ucIkeI49\n5YO/53jb3PjweJAi0PzyqNnPAAYG7Se+m0dkx4GmORzLgxFKOmxK2rq/SyvEpb+F\noE9Rb57LpwKBgAqFWFMEZW46OhQFmAIY3w3sjsjMLt/9alFssyWVbv/HQAl3fjCl\nxEKHCiJwnge9ISj1+zHjsDA6l51WW9+1Vmr9BvUrNDF8BAGD3j25Z3lsqVRBSVmB\nUesQ77zjxOvMfkPJBNToIVepiTCGXOOyb4HIqqV4wGrFAWK2De4lbo5ZAoGBALXP\n6mlaIZRjaHIj/S+BbXAbJ72f2quUxMRzyFpbKflbupfM1l9Oi77IstAt1LF4gtTL\nK+eymCR+PlPIopvXgtOi8m2YoSFFZ024H++mpihxNjghyjZcnBNvX5ydXwQVhu3x\nTy99m0fZT2dpWTvJfOYplhGkfo1Gc7i43aEs8GM9AoGAdskM6cyLbnx9dU3BA/vQ\nvACRlxbfucLqCkzcCPJQFG9xpuaWRWym/TPEbrkguc3BihSaS8W8vlO1bTDuXwbd\nPmCbBgXy3muSGQuRwvxRfBtbMxfzCI7zuMoiNwYGDbpRZgjgqg7vjbE8mLPmt1RZ\ncIzMx39ovSbf9AP+olYXNLc=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-lscuv@backend-561d4.iam.gserviceaccount.com",
        "client_id": "105947093923002934435",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lscuv%40backend-561d4.iam.gserviceaccount.com"
      }
}

export default config;