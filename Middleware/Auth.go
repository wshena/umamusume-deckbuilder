package middleware

import (
	"net/http"
	jwts "uma/api/JWT"
)

func AuthUser(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		cookies, err := r.Cookie("jwt_token")
		if err != nil {
			http.Error(w, "Maaf anda belum login", 500)
			return
		}

		err = cookies.Valid()

		if err != nil {
			http.Error(w, err.Error(), 500)
			return
		} else {
			err = jwts.CheckToken(cookies.Value)
			if err != nil {
				http.Error(w, err.Error(), 500)
				return
			}
		}
		next.ServeHTTP(w, r)
	})
}

//TODO: tambahkan authentication untuk mendeteksi user request (user tidak dapat merequest ) ???
