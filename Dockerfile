# Etapa 1: usar imagem base
FROM node:20-alpine

# Etapa 2: definir diretório de trabalho
WORKDIR /app

# Etapa 3: copiar arquivos de dependência e instalar
COPY package*.json ./
RUN npm install

# Etapa 4: copiar todo o restante do código
COPY . .

# Etapa 5: definir variáveis de ambiente padrão (opcional)
# ENV PORT=3000

# Etapa 6: expor a porta que o servidor usa
EXPOSE 3000

# Etapa 7: comando que inicia a aplicação
CMD ["node", "server.js"]
