🤖 TUTORIAL — COMO CONFIGURAR SEU BOT DISCORD

📌 1. Criando sua aplicação no Discord

Primeiro, acesse o "Discord Developer Portal" (https://reference-url-citation.invalid/0).

1. Faça login com sua conta do Discord.
2. Clique em New Application.
3. Escolha um nome para sua aplicação.
4. Clique em Create.

Pronto! Sua aplicação foi criada.

---

🤖 2. Criando o Bot

Depois de criar a aplicação:

1. Entre na aplicação que você acabou de criar.
2. No menu lateral, clique em Bot.
3. Clique em Add Bot.
4. Confirme a criação do bot.

Agora sua aplicação possui um bot Discord.

Você pode personalizar:

- Nome do bot
- Foto de perfil
- Username
- Descrição

---

🔑 3. Pegando o Token do Bot

O Token é usado pela sua base para conectar o bot ao Discord.

Para obter:

1. Acesse sua aplicação no Discord Developer Portal.
2. Clique em Bot no menu lateral.
3. Localize a seção Token.
4. Clique para copiar o token ou gere um novo token, caso necessário.
5. Copie o token.

⚠️ MUITO IMPORTANTE!

Seu Token é uma informação privada e secreta.

Nunca envie seu Token para outras pessoas e nunca publique ele em:

- GitHub
- Grupos
- Servidores Discord
- Prints
- Vídeos
- Redes sociais

Se outra pessoa conseguir seu Token, ela poderá controlar seu bot.

Caso seu Token seja vazado, volte à página Bot e gere um novo Token imediatamente.

---

⚙️ 4. Ativando os Intents

Algumas funções da sua base podem precisar de permissões especiais do Discord.

No Developer Portal:

1. Acesse sua aplicação.
2. Clique em Bot.
3. Procure Privileged Gateway Intents.
4. Ative os Intents necessários para sua base.

Os principais são:

🟢 Presence Intent

Permite que o bot tenha acesso a informações relacionadas à presença dos usuários.

🟢 Server Members Intent

Permite que o bot tenha acesso a informações dos membros dos servidores.

🟢 Message Content Intent

Necessário para bases que precisam ler o conteúdo das mensagens enviadas pelos usuários.

⚠️ Se a sua base utiliza comandos por mensagem, normalmente o Message Content Intent precisa estar ativado.

Depois de ativar os Intents necessários, clique em Save Changes.

---

🔗 5. Adicionando o Bot ao seu Servidor

Agora você precisa adicionar o bot ao servidor onde deseja utilizá-lo.

1. Abra sua aplicação no Developer Portal.
2. Acesse OAuth2.
3. Entre em URL Generator.
4. Em Scopes, marque:

"bot"

Se sua base utiliza comandos Slash "/", marque também:

"applications.commands"

Depois, selecione as permissões necessárias para o funcionamento da sua base.

Algumas permissões comuns são:

- View Channels
- Send Messages
- Embed Links
- Attach Files
- Read Message History
- Use Slash Commands

Após selecionar as permissões:

1. Copie o link gerado.
2. Abra o link no navegador.
3. Escolha o servidor onde deseja adicionar o bot.
4. Clique em Continue.
5. Revise as permissões.
6. Clique em Authorize.

Pronto! O bot será adicionado ao seu servidor.

⚠️ Você precisa ter permissão suficiente no servidor para adicionar bots.

---

🛠️ 6. Configurando sua Base

Depois de criar o bot, pegar o Token, ativar os Intents e adicionar o bot ao servidor, basta configurar as informações solicitadas pela sua base.

Normalmente, você precisará informar:

- Token do Bot
- ID do Dono
- ID do Servidor
- Prefixo
- Nome do Bot
- Outras configurações específicas da base

📌 Importante: cada base possui um sistema de configuração diferente. Siga as instruções fornecidas pelo desenvolvedor da base para inserir essas informações.

---

🆔 7. Como pegar o ID do seu usuário

Para descobrir seu ID do Discord:

1. Abra o Discord.
2. Vá em Configurações de Usuário.
3. Entre em Avançado.
4. Ative o Modo Desenvolvedor.
5. Volte ao seu perfil.
6. Clique nos três pontos "...".
7. Selecione Copiar ID do usuário.

O número copiado será o seu ID.

---

🆔 8. Como pegar o ID de um servidor

Para pegar o ID do servidor:

1. Ative o Modo Desenvolvedor no Discord.
2. Abra o servidor desejado.
3. Clique com o botão direito no nome do servidor ou toque e segure, dependendo do dispositivo.
4. Selecione Copiar ID do servidor.

---

🆔 9. Como pegar o ID de um canal

Para pegar o ID de um canal:

1. Ative o Modo Desenvolvedor.
2. Localize o canal desejado.
3. Clique com o botão direito ou toque e segure no canal.
4. Selecione Copiar ID.

---

🚀 10. Finalizando a configuração

Depois de realizar todos os passos:

✅ Aplicação criada
✅ Bot criado
✅ Token copiado
✅ Intents ativados
✅ Bot adicionado ao servidor
✅ IDs necessários configurados
✅ Base configurada

Agora basta iniciar sua base seguindo o método de execução fornecido pelo desenvolvedor.

Se tudo estiver configurado corretamente, seu bot deverá ficar online no Discord e pronto para utilizar os comandos disponíveis.

---

❗ Problemas comuns

🔴 Bot offline

Verifique:

- Se o Token está correto.
- Se o Token não expirou ou foi regenerado.
- Se a base foi iniciada corretamente.
- Se o bot possui acesso à internet.

🔴 Erro relacionado a Intents

Volte ao Developer Portal → Bot → Privileged Gateway Intents e verifique se os Intents necessários estão ativados.

🔴 Bot não responde aos comandos

Verifique:

- Se o bot está online.
- Se o bot possui permissão para visualizar o canal.
- Se possui permissão para enviar mensagens.
- Se o Message Content Intent está ativado, caso sua base utilize mensagens comuns.
- Se você está utilizando o prefixo correto.

🔴 Comandos "/" não aparecem

Verifique se:

- O bot foi convidado com "applications.commands".
- Os comandos foram registrados corretamente pela sua base.
- O bot possui acesso ao servidor.
- Você está utilizando a conta correta.

---

🔐 SEGURANÇA

NUNCA compartilhe seu Token!

O Token do bot funciona como uma chave de acesso à sua aplicação. Caso você tenha enviado o Token para alguém ou publicado acidentalmente, gere um novo Token imediatamente pelo Discord Developer Portal.

🚨 Não compartilhe seu Token nem mesmo com pessoas que dizem ser da equipe do Discord.

---

❤️ PRONTO!

Agora seu bot está criado e configurado para ser utilizado com sua base.

ZYRON-MD & ZYRON-AI ❤️‍🔥
