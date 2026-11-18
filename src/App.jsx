import { useState, useRef } from 'react';
import '@telegram-apps/telegram-ui/dist/styles.css';
import {
  AppRoot, Accordion, Avatar, AvatarStack, Badge, Banner, Blockquote,
  Breadcrumbs, Button, ButtonCell, Card, Cell, Checkbox, Chip, ColorInput,
  CompactPagination, CircularProgress, Divider, FileInput, FixedLayout, Headline, IconButton,
  IconContainer, Image, InlineButtons, Input, Link, List, Modal, Multiselect,
  Pagination, PinInput, Placeholder, Progress, Radio, Rating, Section, Select,
  Selectable, Slider, Skeleton, Spinner, Spoiler, Steps, Switch, Tabbar,
  TabsList, Text, Textarea, Title, Typography, Caption, LargeTitle, Subheadline,
  Info, Navigation, Tappable, VisuallyHidden, Tooltip, Popper, SegmentedControl,
  Timeline, Snackbar,
} from '@telegram-apps/telegram-ui';

// Plain wrapper — an ErrorBoundary is used instead of a fake try/catch component
function SafeSection({ children, header }) {
  return <Section header={header}>{children}</Section>;
}

export default function Showroom() {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [switchOn, setSwitchOn] = useState(false);
  const [checkboxOn, setCheckboxOn] = useState(true);
  const [selectValue, setSelectValue] = useState('1');
  const [sliderValue, setSliderValue] = useState(40);
  const [ratingValue, setRatingValue] = useState(3);
  const [colorValue, setColorValue] = useState('#007aff');
  const [pinValue, setPinValue] = useState([1, 2, 3, 4]);
  const [modalOpen, setModalOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const popperTarget = useRef(null);
  return (
    <AppRoot>
      <div style={{ maxWidth: 660, margin: '0 auto', padding: 16 }}>
        <Title as="div" size="l" style={{ marginBottom: 20 }}>
          Telegram UI — Component Showroom
        </Title>

        <SafeSection header="Typography">
          <LargeTitle>Large Title</LargeTitle>
          <Headline>Headline</Headline>
          <Title size="m">Title (medium)</Title>
          <Subheadline>Subheadline example text</Subheadline>
          <Text>Regular body text paragraph.</Text>
          <Caption>Small secondary caption note.</Caption>
          <Typography as="span">Generic typography element.</Typography>
        </SafeSection>

        <SafeSection header="Badges & Chips">
          <Badge color="blue">New</Badge>
          <Badge color="green">Online</Badge>
          <Chip>Chip</Chip>
          <Chip disabled>Disabled chip</Chip>
        </SafeSection>

        <SafeSection header="Avatars">
          <Avatar size={32} acronym="AL" />
          <Avatar size={48} acronym="TG" />
          <AvatarStack><Avatar acronym="A" /><Avatar acronym="B" /><Avatar acronym="C" /></AvatarStack>
        </SafeSection>

        <SafeSection header="Buttons">
          <Button size="s" mode="filled">Small</Button>
          <Button size="m" mode="filled">Medium</Button>
          <Button size="l" mode="filled">Large filled</Button>
          <Button size="l" mode="outline">Outline</Button>
          <Button size="l" mode="ghost">Ghost</Button>
          <Button size="l" stretched>Stretched</Button>
          <IconButton size="m">★</IconButton>
          <ButtonCell before={<Avatar size={24} acronym="X" />} after="→">Button cell</ButtonCell>
        </SafeSection>

        <SafeSection header="Cells & List">
          <List>
            <Cell before={<Avatar size={32} acronym="JD" />} subtitle="Subtitle text">Cell with avatar</Cell>
            <Cell after="Active">Notifications</Cell>
          </List>
          <Info label="Label" value="Value" />
          <Navigation label="Open section" href="#" />
        </SafeSection>

        <SafeSection header="Cards & Containers">
          <Card><Text>Card content area.</Text></Card>
          <Placeholder title="Nothing here" subtitle="No items found" />
          <Banner>This is a banner notice.</Banner>
          <Blockquote cite="Telegram"><Text>Blockquote text example.</Text></Blockquote>
          <Divider />
        </SafeSection>

        <SafeSection header="Feedback">
          <Progress value={60} />
          <CircularProgress size="large" progress={75} />
          <Spinner />
          <Snackbar onClose={() => {}}>Snackbar message example</Snackbar>
          <Skeleton />
          <Spoiler summary="Click to reveal">Hidden spoiler content</Spoiler>
        </SafeSection>
        <SafeSection header="Form controls">
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter text" />
          <Textarea value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)} placeholder="Type here…" />
          <Switch checked={switchOn} onChange={(checked) => setSwitchOn(checked)} />
          <Checkbox checked={checkboxOn} onChange={(checked) => setCheckboxOn(checked)} />
          <Radio name="group" value="a" checked={selectValue === 'a'} onChange={() => setSelectValue('a')}>Option A</Radio>
          <Radio name="group" value="b" checked={selectValue === 'b'} onChange={() => setSelectValue('b')}>Option B</Radio>
          <Select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </Select>
          <Slider multiple={false} value={sliderValue} onChange={(value) => setSliderValue(value)} min={0} max={100} />
          <Rating value={ratingValue} onChange={(value) => setRatingValue(value)} max={5} />
          <ColorInput value={colorValue} onChange={(value) => setColorValue(value)} />
          <PinInput pinCount={4} value={pinValue} onChange={setPinValue} />
          <FileInput label="Choose file" />
          <Multiselect options={[{value:'a',label:'Alpha'},{value:'b',label:'Beta'},{value:'c',label:'Gamma'}]} value={['a']} onChange={() => {}} />
          <Selectable type="radio" checked={selectValue === 'a'} onChange={() => {}} />
        </SafeSection>

        <SafeSection header="Layout & Navigation">
          <TabsList><TabsList.Item selected>Tab 1</TabsList.Item><TabsList.Item>Tab 2</TabsList.Item></TabsList>
          <SegmentedControl value="a" onValueChange={() => {}}>
            <SegmentedControl.Item value="a">A</SegmentedControl.Item>
            <SegmentedControl.Item value="b">B</SegmentedControl.Item>
          </SegmentedControl>
          <Link href="#" external>External link</Link>
          <Breadcrumbs items={[{label:'Home',href:'#'},{label:'Showroom'}]} />
          <Pagination page={1} total={10} onPageChange={() => {}} />
          <CompactPagination page={1} total={20} onPageChange={() => {}} />
          <Tabbar><Tabbar.Item icon="💬" label="Chats" selected /><Tabbar.Item icon="📞" label="Calls" /></Tabbar>
          <FixedLayout><div style={{padding: 12}}>Fixed layout content</div></FixedLayout>
          <Divider />
        </SafeSection>

        <SafeSection header="Expandable & Sequences">
          <Accordion expanded={accordionOpen} onChange={setAccordionOpen}>
            <Accordion.Summary>Accordion summary</Accordion.Summary>
            <Accordion.Content>Accordion content body.</Accordion.Content>
          </Accordion>
          <Steps count={3} progress={1} />
          <Timeline active={1}>
            <Timeline.Item header="Event A">Description A</Timeline.Item>
            <Timeline.Item header="Event B">Description B</Timeline.Item>
          </Timeline>
        </SafeSection>

        <SafeSection header="Overlays">
          <Button onClick={() => setModalOpen(true)}>Open modal</Button>
          <Modal open={modalOpen} onOpenChange={setModalOpen} header={<Modal.Header>Modal title</Modal.Header>}>
            <Text>Modal body content.</Text>
            <Modal.Close onClick={() => setModalOpen(false)}>Close</Modal.Close>
          </Modal>
          <Tooltip content="This is a tooltip"><Button>Tooltip target</Button></Tooltip>
          <Popper targetRef={popperTarget}>Popper content</Popper>
          <div ref={popperTarget} style={{ display: 'inline-block' }}>Popper target</div>
        </SafeSection>

        <SafeSection header="Service">
          <Tappable onPress={() => {}}>Tappable area</Tappable>
          <VisuallyHidden>Screen-reader only text</VisuallyHidden>
        </SafeSection>
      </div>
    </AppRoot>
  );
}
