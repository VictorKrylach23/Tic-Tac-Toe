import { ChangeCount } from './change-count/changeCount';
import { ChangePlayer } from './change-player/changePlayer';
import { FillEmptyForm } from './fill-empty-form/fillEptyForm';
import { isPlayerClickOnEmtyForm } from './is-player-click-on-empty-form/isPlayerClickOnEmptyForm';

export const HandlerGameField = (props) => {
	const { id, setCount, setPlayer, player, setSpace, space, count } = props;
	if (isPlayerClickOnEmtyForm(id, space)) {
		FillEmptyForm({ id: id, setSpace: setSpace, space: space, count: count });
		ChangePlayer({ setPlayer: setPlayer, player: player });
		ChangeCount(setCount);
	}
};
