import { HttpResponse, http } from 'msw';

const snippets = "http://127.0.0.1:8000/api/snippets/"

export const getMain = http.get("/snippets/main_page", () => {
    const data = {
        about_text: "Кафедра ИУ5 «Системы обработки информации и управления» МГТУ им. Н.Э. Баумана планирует провести конференцию «Искусственный интеллект в автоматизированных системах управления и обработки данных» ИИАСУ’23.",
        purpose_text: "Представить, рассмотреть и обсудить современное состояние работ по интеграции искусственного интеллекта в автоматизиро-ванные системы управления и обработки данных.",
        topic_text: "Тематика конференции включает различные направления в рамках задач проектирования, разработки, внедрения, интеграции и эксплуатации автоматизи-рованных систем управления и обработки данных.",
        participation_text: "Участие бесплатное. Необходима регистрация. Статьи принимаются до 3-го апреля 2023 г."
    }

    return new Response(JSON.stringify({ ...data }), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
})