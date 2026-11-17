import "@telegram-apps/telegram-ui/dist/styles.css";
import { AppRoot, List, Section, Cell, Button, Avatar } from "@telegram-apps/telegram-ui";

export default function App() {
  return (
    <AppRoot>
      <List>
        <Section header="تنظیمات حساب کاربری" footer="ظاهر این بخش دقیقاً شبیه تلگرام است">
          <Cell before={<Avatar size={48} acronym="AL" />} subtitle="آنلاین">
            علی رضایی
          </Cell>
          <Cell after="فعال">اعلان‌ها</Cell>
        </Section>

        <Section>
          <div style={{ padding: "12px" }}>
            <Button size="l" stretched mode="filled">
              ذخیره تغییرات
            </Button>
          </div>
        </Section>
      </List>
    </AppRoot>
  );
}
