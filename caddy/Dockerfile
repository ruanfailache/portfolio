FROM caddy:2-builder AS builder
RUN xcaddy build \
    --with github.com/mholt/caddy-ratelimit \
    --with github.com/WeidiDeng/caddy-cloudflare-ip

FROM caddy:2-alpine
COPY --from=builder /usr/bin/caddy /usr/bin/caddy
